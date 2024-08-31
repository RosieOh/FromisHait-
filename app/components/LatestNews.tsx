// app/components/LatestNews.tsx

interface NewsItem {
    id: number;
    title: string;
    date: string;
    summary: string;
    link: string;
  }
  
  interface LatestNewsProps {
    newsItems: NewsItem[];
  }
  
  export default function LatestNews({ newsItems }: LatestNewsProps) {
    return (
      <div className="space-y-6">
        {newsItems.map((news) => (
          <div key={news.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{news.title}</h3>
            <p className="text-gray-500 text-sm">{news.date}</p>
            <p className="text-gray-700 mt-4">{news.summary}</p>
            <a href={news.link} className="text-pink-500 hover:underline mt-4 inline-block">
              Read more
            </a>
          </div>
        ))}
      </div>
    );
  }
  