import { useState, useEffect } from "react";

const API_KEY = "886446765572227d75cf663ba3a5b78c";
const PAGE_SIZE = 6;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

  .tn-root {
    font-family: 'DM Sans', sans-serif;
    background: #080c14;
    min-height: 100vh;
    color: #e8eaf0;
    padding: 40px 28px;
  }

  .tn-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 16px;
    border-bottom: 1px solid #1e2535;
    padding-bottom: 24px;
  }

  .tn-header-left h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: 3px;
    color: #fff;
    line-height: 1;
  }

  .tn-header-left h1 em {
    color: #00e5ff;
    font-style: normal;
  }

  .tn-header-left p {
    color: #4a5568;
    font-size: 0.8rem;
    margin-top: 6px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .tn-live-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #0d1421;
    border: 1px solid #1e2535;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 0.72rem;
    color: #4a5568;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .tn-live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 10px #00e5ff;
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  .tn-error {
    background: #0f0a0a;
    border: 1px solid #ff4d6d44;
    border-radius: 12px;
    padding: 48px 32px;
    text-align: center;
    max-width: 480px;
    margin: 60px auto;
  }
  .tn-error-icon { font-size: 2.5rem; margin-bottom: 12px; }
  .tn-error h3 { color: #ff4d6d; font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; letter-spacing: 2px; margin-bottom: 8px; }
  .tn-error p { color: #4a5568; font-size: 0.82rem; margin-bottom: 20px; line-height: 1.6; }
  .tn-retry-btn {
    background: #ff4d6d;
    color: #fff;
    border: none;
    padding: 10px 28px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.82rem;
    transition: opacity 0.2s;
  }
  .tn-retry-btn:hover { opacity: 0.8; }

  .tn-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 36px;
  }

  .tn-skeleton {
    background: #0d1421;
    border: 1px solid #1e2535;
    border-radius: 12px;
    overflow: hidden;
    animation: shimmer 1.6s infinite;
  }

  .tn-skeleton-img { height: 160px; background: #131c2e; }
  .tn-skeleton-body { padding: 18px; }
  .tn-skeleton-line { height: 10px; background: #131c2e; border-radius: 4px; margin-bottom: 10px; }
  .tn-skeleton-line.w80 { width: 80%; }
  .tn-skeleton-line.w60 { width: 60%; }
  .tn-skeleton-line.w40 { width: 40%; }

  @keyframes shimmer {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .tn-card {
    background: #0d1421;
    border: 1px solid #1e2535;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    animation: fadeUp 0.4s ease both;
    text-decoration: none;
    color: inherit;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .tn-card:hover {
    transform: translateY(-5px);
    border-color: #00e5ff44;
    box-shadow: 0 12px 40px rgba(0, 229, 255, 0.08);
  }

  .tn-card-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
    background: #131c2e;
  }

  .tn-card-img-placeholder {
    width: 100%;
    height: 160px;
    background: linear-gradient(135deg, #0d1f35, #131c2e);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }

  .tn-card-body { padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 10px; }

  .tn-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #4a5568;
    letter-spacing: 0.5px;
  }

  .tn-card-source {
    background: #00e5ff14;
    color: #00e5ff;
    border: 1px solid #00e5ff22;
    border-radius: 4px;
    padding: 2px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.65rem;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }

  .tn-card-title {
    font-weight: 600;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #e8eaf0;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tn-card-desc {
    font-size: 0.78rem;
    color: #4a5568;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tn-card-link {
    font-size: 0.75rem;
    color: #00e5ff;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: gap 0.2s;
  }

  .tn-card:hover .tn-card-link { gap: 8px; }

  .tn-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-top: 8px;
    flex-wrap: wrap;
  }

  .tn-page-btn {
    background: #0d1421;
    border: 1px solid #1e2535;
    color: #e8eaf0;
    padding: 10px 22px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tn-page-btn:disabled { opacity: 0.25; cursor: not-allowed; }
  .tn-page-btn:not(:disabled):hover {
    background: #00e5ff;
    color: #080c14;
    border-color: #00e5ff;
  }

  .tn-page-info {
    background: #0d1421;
    border: 1px solid #1e2535;
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 0.82rem;
    color: #4a5568;
    min-width: 160px;
    text-align: center;
  }

  .tn-page-info strong { color: #00e5ff; }

  .tn-total {
    text-align: center;
    color: #4a5568;
    font-size: 0.75rem;
    margin-top: 14px;
    letter-spacing: 0.5px;
  }
`;

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

export default function TechNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const totalPages = Math.ceil(Math.min(totalResults, 100) / PAGE_SIZE);

const fetchNews = async (pageNum, retries = 2) => {
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
    setLoading(false);
  } catch (err) {
    if (retries > 0) {
      setTimeout(() => fetchNews(pageNum, retries - 1), 1500);
    } else {
      setError(err.message);
      setLoading(false);
    }
  }
};

useEffect(() => {
  fetchNews(page);
}, [page]);

  return (
    <>
      <style>{styles}</style>
      <div className="tn-root">

        <div className="tn-header">
          <div className="tn-header-left">
            <h1>TECH <em>NEWS</em></h1>
            <p>Noticias de tecnología e inteligencia artificial</p>
          </div>
          <div className="tn-live-badge">
            <span className="tn-live-dot" />
            En vivo · NewsAPI
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
                      ? <img className="tn-card-img" src={article.image} alt={article.title} onError={e => e.target.style.display='none'} />
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
    </>
  );
}
