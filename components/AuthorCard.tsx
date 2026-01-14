import React from 'react';
import { MergedAuthor } from '../types';

interface AuthorCardProps {
  author: MergedAuthor;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="p-6 flex-1">
        {/* Header - Name & Total */}
        <div className="flex justify-between items-start mb-4">
          <div className="min-w-0 pr-2"> {/* Added min-w-0 for truncate to work flexbox */}
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1" title={author.name}>
              {author.name}
            </h3>
            {author.orcId && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mt-1">
                ORCID: {author.orcId}
              </span>
            )}
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
             <span className="text-3xl font-extrabold text-indigo-600 leading-none">
               {author.totalDocs}
             </span>
             <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">
               Total Docs
             </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Scopus Stats */}
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-100 flex flex-col h-full">
            <div className="flex justify-between items-start">
               <span className="text-xs text-orange-600 font-semibold uppercase">Scopus</span>
               <span className="text-lg font-bold text-gray-800 leading-none">{author.scopusDocs}</span>
            </div>
            {author.scopusId && (
               <div className="mt-2 text-[11px] text-gray-500 font-mono break-words leading-tight">
                   {author.scopusId}
               </div>
            )}
          </div>
          {/* WoS Stats */}
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex flex-col h-full">
            <div className="flex justify-between items-start">
               <span className="text-xs text-blue-600 font-semibold uppercase">WoS</span>
               <span className="text-lg font-bold text-gray-800 leading-none">{author.wosDocs}</span>
            </div>
            {author.wosId && (
               <div className="mt-2 text-[11px] text-gray-500 font-mono break-words leading-tight">
                    {author.wosId}
               </div>
            )}
          </div>
        </div>

        {/* Subjects */}
        {author.subjects && author.subjects.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {author.subjects.slice(0, 3).map((sub, idx) => (
              <span key={idx} className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full truncate max-w-full">
                {sub}
              </span>
            ))}
            {author.subjects.length > 3 && (
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{author.subjects.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer - Actions */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col gap-3">
        {/* Scopus Links */}
        {author.scopusUrl && author.scopusUrl.length > 0 && (
            <div className="w-full">
                {author.scopusUrl.length === 1 ? (
                    <a
                        href={author.scopusUrl[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full justify-center items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
                    >
                        Scopus Profile
                    </a>
                ) : (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase mb-1">Scopus Profiles</span>
                        <div className="flex flex-wrap gap-2">
                            {author.scopusUrl.map((url, i) => (
                                <a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[80px] text-center px-3 py-1.5 text-xs font-medium text-orange-700 bg-orange-100 hover:bg-orange-200 border border-orange-200 rounded-md transition-colors"
                                >
                                    Profile {i + 1}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* WoS Links */}
        {author.wosUrl && author.wosUrl.length > 0 && (
             <div className="w-full">
                 {author.wosUrl.length === 1 ? (
                    <a
                        href={author.wosUrl[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full justify-center items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                        WoS Profile
                    </a>
                 ) : (
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase mb-1">WoS Profiles</span>
                         <div className="flex flex-wrap gap-2">
                             {author.wosUrl.map((url, i) => (
                                 <a
                                     key={i}
                                     href={url}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="flex-1 min-w-[80px] text-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 border border-blue-200 rounded-md transition-colors"
                                 >
                                     Profile {i + 1}
                                 </a>
                             ))}
                         </div>
                    </div>
                 )}
             </div>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;