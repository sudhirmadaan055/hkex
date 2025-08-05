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

import Link from 'next/link'

export default function AdventureCard({ slug, title, price, duration, imageSrc }) {
  try {
    return (
      <div key={slug} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <p className="mt-1 text-sm text-gray-500">{duration}</p>
          <p className="text-sm font-medium text-gray-900">${price} USD</p>
        </div>
        <h3 className="font-semibold text-gray-700">
          <Link href={`adventures/${slug}`} legacyBehavior>
            <div>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </div>
          </Link>
        </h3>
      </div>
    );
  } catch (error) {
    console.error('Error rendering adventure card:', error);
    return (
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">Image unavailable</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <p className="mt-1 text-sm text-gray-500">{duration || 'Duration unavailable'}</p>
          <p className="text-sm font-medium text-gray-900">${price || '0'} USD</p>
        </div>
        <h3 className="font-semibold text-gray-700">
          {title || 'Adventure Title Unavailable'}
        </h3>
      </div>
    );
  }
}