'use client';

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

import { usePathname } from "next/navigation";

export const siteTitle = 'HKEX';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children }) {
  try {
    const pathname = usePathname();
    const isCurrentPage = (path) => {
      return path === '/' ? pathname === '/' : pathname.indexOf(path) === 0
    };
    
    return (
      <div className="min-h-full">
        <main>{children}</main>
      </div>
    );
  } catch (error) {
    console.error('Error rendering layout:', error);
    return (
      <div className="min-h-full">
        <main>
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Something went wrong</h2>
              <p className="text-gray-600">Please try refreshing the page.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
