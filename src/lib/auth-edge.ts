// lib/auth-edge.ts
export interface TokenPayload {
  userId: number;
  email: string;
  full_name?: string;
  role: 'user' | 'admin';
  classId: number | null;
}

// Edge Runtime compatible JWT verification using Web Crypto API
export async function verifyTokenEdge(token: string): Promise<TokenPayload | null> {
  try {
    
    // Split the JWT
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const [header, payload, signature] = parts;
    
    // Decode payload to check expiration
    const decodedPayload = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    
    // Check expiration
    if (decodedPayload.exp && Date.now() >= decodedPayload.exp * 1000) {
      return null;
    }

    // Verify signature using Web Crypto API
    const secret = process.env.JWT_SECRET!;
    const encoder = new TextEncoder();
    const data = encoder.encode(`${header}.${payload}`);
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    // Decode signature
    const signatureBytes = Uint8Array.from(atob(signature.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    
    const isValid = await crypto.subtle.verify('HMAC', key, signatureBytes, data);
    
    if (!isValid) {
      return null;
    }

    return {
      userId: decodedPayload.userId,
      email: decodedPayload.email,
      full_name: decodedPayload.full_name || '',
      role: decodedPayload.role,
      classId: decodedPayload.classId
    };
  } catch (error) {
    return null;
  }
}