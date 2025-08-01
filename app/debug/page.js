'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [envVars, setEnvVars] = useState({});

  useEffect(() => {
    // Check environment variables
    const vars = {
      NEXT_PUBLIC_AEM_HOST: process.env.NEXT_PUBLIC_AEM_HOST,
      NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT,
      AEM_AUTH_METHOD: process.env.AEM_AUTH_METHOD,
      AEM_AUTH_USER: process.env.AEM_AUTH_USER ? '***SET***' : 'NOT SET',
      AEM_AUTH_PASSWORD: process.env.AEM_AUTH_PASSWORD ? '***SET***' : 'NOT SET',
      AEM_AUTH_DEV_TOKEN: process.env.AEM_AUTH_DEV_TOKEN ? '***SET***' : 'NOT SET',
    };
    setEnvVars(vars);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Debug</h1>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Current Environment Variables:</h2>
        <pre className="text-sm">
          {JSON.stringify(envVars, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Expected .env.local format:</h2>
        <pre className="bg-yellow-100 p-4 rounded text-sm">
{`# AEM Host Configuration
NEXT_PUBLIC_AEM_HOST=https://author-p35060-e135910.adobeaemcloud.com

# GraphQL Endpoint Configuration
NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT=/graphql/execute.json/gpoc

# Basic Authentication
AEM_AUTH_METHOD=basic
AEM_AUTH_USER=your-actual-username
AEM_AUTH_PASSWORD=your-actual-password

# OR for dev token authentication
# AEM_AUTH_METHOD=dev-token
# AEM_AUTH_DEV_TOKEN=your-actual-dev-token

# Optional: Public URL for assets
NEXT_PUBLIC_URL=http://localhost:3000`}
        </pre>
      </div>
    </div>
  );
} 