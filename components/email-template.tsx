import * as React from 'react';

interface EmailTemplateProps {
  firstname: string;
  message?: string;
  email?: string;
}

export function EmailTemplate({ firstname, message, email }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hola {firstname}!</h1>
      <p>Gracias por contactarnos. Hemos recibido tu mensaje.</p>
      
      {message && (
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '15px', 
          margin: '15px 0',
          borderLeft: '4px solid #0070f3'
        }}>
          <p><strong>Tu mensaje:</strong></p>
          <p>{message}</p>
        </div>
      )}
      
      {email && (
        <p><strong>Email:</strong> {email}</p>
      )}
      
      <p style={{ marginTop: '20px' }}>
        Saludos,<br />
        El equipo de Acme
      </p>
    </div>
  );
}