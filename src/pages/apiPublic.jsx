import { useState, useEffect } from "react";
import './apiPublic.css';
 
const API_KEY = "886446765572227d75cf663ba3a5b78c";
const PAGE_SIZE = 6;
 
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" });
}
 
function SkeletonCard() {
  return (
    <div className="tn-skeleton">
      <div className="tn-skeleton-img" />
      <div className="tn-skeleton-body">
        <div className="tn-skeleton-line w40" />
        <div className="tn-skeleton-line w80" />
        <div className="tn-skeleton-line w80" />
        <div className="tn-skeleton-line w60" />
      </div>
    </div>
  );
}
 
export default function ApiPublic() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 
  const totalPages = Math.ceil(Math.min(totalResults, 100) / PAGE_SIZE);
 
  const fetchNews = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=inteligencia+artificial&lang=es&max=${PAGE_SIZE}&page=${pageNum}&token=${API_KEY}`
      );
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const data = await res.json();
      if (data.errors) throw new Error(data.errors[0]);
      setArticles(data.articles || []);
      setTotalResults(data.totalArticles || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchNews(page);
  }, [page]);
  
   useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        fetchNews(page);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="tn-root">

 
      <div className="tn-header">
        <div className="tn-header-left">
          <h1>TECH <em>NEWS</em></h1>
          <p>Noticias de tecnología e inteligencia artificial</p>
        </div>
        <div className="tn-live-badge">
          <span className="tn-live-dot" />
          En vivo · GNews
        </div>
      </div>
 
      {error && (
        <div className="tn-error">
          <div className="tn-error-icon">⚠️</div>
          <h3>Error de conexión</h3>
          <p>{error}</p>
          <button className="tn-retry-btn" onClick={() => fetchNews(page)}>↺ Reintentar</button>
        </div>
      )}
 
      {!error && (
        <div className="tn-grid">
          {loading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((article, i) => (
                <a
                  className="tn-card"
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {article.image
                    ? <img className="tn-card-img" src={article.image} alt={article.title} onError={e => e.target.style.display = 'none'} />
                    : <div className="tn-card-img-placeholder">📡</div>
                  }
                  <div className="tn-card-body">
                    <div className="tn-card-meta">
                      <span className="tn-card-source">{article.source?.name || "Fuente"}</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="tn-card-title">{article.title}</div>
                    {article.description && (
                      <div className="tn-card-desc">{article.description}</div>
                    )}
                    <span className="tn-card-link">Leer artículo →</span>
                  </div>
                </a>
              ))
          }
        </div>
      )}
 
      {!error && !loading && totalPages > 1 && (
        <>
          <div className="tn-pagination">
            <button
              className="tn-page-btn"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← Anterior
            </button>
            <div className="tn-page-info">
              Página <strong>{page}</strong> de <strong>{totalPages}</strong>
            </div>
            <button
              className="tn-page-btn"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Siguiente →
            </button>
          </div>
          <div className="tn-total">{totalResults.toLocaleString()} artículos encontrados</div>
        </>
      )}
 
    </div>
  );
}
 