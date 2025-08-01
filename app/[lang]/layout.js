/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: 'HKEX',
  description: 'News, data, products, services and IPO information from HKEX -  Asia&#39;s premier international capital market.',
  openGraph: {
    title: 'HKEX',
    description: 'News, data, products, services and IPO information from HKEX -  Asia&#39;s premier international capital market.',
    images: [`https://www.hkex.com.hk/Market/home/media_20250725170911/HKEX%2025A%20Logo%20%20Group%20%20Market%20Mono.png?_20250221T101910Z`],
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'cq:pagemodel_router': 'disabled',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 