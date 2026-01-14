import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MergedAuthor } from '../types';

interface StatsProps {
  data: MergedAuthor[];
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  // Get top 10 authors by total docs
  const topAuthors = [...data]
    .sort((a, b) => b.totalDocs - a.totalDocs)
    .slice(0, 10)
    .map(a => ({
      name: a.name.split(',')[0], // Just use last name for chart brevity if formatted as Last, First
      total: a.totalDocs,
      scopus: a.scopusDocs,
      wos: a.wosDocs
    }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Top 10 Authors: Scopus vs Web of Science</h2>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topAuthors}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" tick={{fontSize: 12}} />
            <YAxis />
            <Tooltip 
                cursor={{fill: '#f3f4f6'}}
                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
            />
            <Legend />
            <Bar dataKey="scopus" name="Scopus" stackId="a" fill="#f97316" />
            <Bar dataKey="wos" name="Web of Science" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;