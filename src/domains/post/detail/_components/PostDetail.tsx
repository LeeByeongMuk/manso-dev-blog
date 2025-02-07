import React from 'react';

import { PostData } from '@domains/post/detail/_types/api';
import { getFormattedDate } from '@shared/utils/date';

interface PostDetailProps {
  isLoading: boolean;
  post: PostData;
}

export default function PostDetail({ isLoading, post }: PostDetailProps) {
  return (
    <div className="mt-5">
      <div>
        <h4 className="border-b-2 border-b-teal-600 p-2 text-xl font-bold">
          {isLoading ? (
            <div className="my-2 h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
          ) : (
            post.title
          )}
        </h4>

        <div className="flex items-center justify-between bg-teal-100 p-2 text-base">
          {isLoading ? (
            <div className="h-3 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
          ) : (
            <span>{post.user_name}</span>
          )}

          {isLoading ? (
            <div className="h-3 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
          ) : (
            <span>{getFormattedDate(post.created_at)}</span>
          )}
        </div>
      </div>

      <div className="border-b-2 px-2 py-5 text-base">
        {isLoading ? (
          <div className="h-64 w-full bg-gray-200 dark:bg-gray-700" />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: post.contents }} />
        )}
      </div>
    </div>
  );
}
