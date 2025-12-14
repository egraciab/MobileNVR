import React from 'react';
import {
  ClockIcon,
  CloudIcon,
  DownloadIcon,
  FilterIcon,
  ListIcon,
  PlayIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  TagIcon,
  VideoIcon
} from './components/Icons';

const cameraClips = [
  {
    id: 1,
    title: 'Entrada principal',
    time: 'Hoy · 09:25',
    length: '2:15',
    status: 'Movimiento detectado',
    tags: ['Mov.', 'Persona'],
    color: '#f4f5ff'
  },
  {
    id: 2,
    title: 'Patio trasero',
    time: 'Hoy · 09:10',
    length: '1:03',
    status: 'Ruta habitual',
    tags: ['Auto'],
    color: '#e9fbf0'
  },
  {
    id: 3,
    title: 'Depósito',
    time: 'Hoy · 08:55',
    length: '3:44',
    status: 'Actividad prolongada',
    tags: ['Mov.', 'Alarma'],
    color: '#fff6ed'
  }
];

const quickFilters = ['Hoy', 'Semana', 'Eventos', 'Favoritos'];
const navItems = [
  { label: 'Inicio', icon: <SparklesIcon />, active: true },
  { label: 'Grabaciones', icon: <VideoIcon />, active: false },
  { label: 'Alertas', icon: <TagIcon />, active: false },
  { label: 'Perfil', icon: <SettingsIcon />, active: false }
];

const timelineBlocks = [
  { label: '06:00', intensity: 1 },
  { label: '08:00', intensity: 3 },
  { label: '10:00', intensity: 4 },
  { label: '12:00', intensity: 2 },
  { label: '14:00', intensity: 1 },
  { label: '16:00', intensity: 3 },
  { label: '18:00', intensity: 5 }
];

function App() {
  return (
    <div className="app-shell">
      <div className="status-bar">
        <div className="status-left">09:26</div>
        <div className="status-right">
          <CloudIcon />
          <span>LTE</span>
          <div className="battery">
            <div className="battery-level" />
          </div>
        </div>
      </div>

      <main className="app-content">
        <header className="page-header">
          <div>
            <p className="eyebrow">Mobile DVR/NVR</p>
            <h1>Tu espacio de grabaciones</h1>
            <p className="subtitle">
              Busca, reproduce y comparte los momentos clave de todas tus cámaras.
            </p>
          </div>
          <button className="icon-button">
            <SettingsIcon />
          </button>
        </header>

        <section className="search-panel">
          <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Buscar cámaras, zonas o etiquetas" />
            <button className="pill ghost">
              <FilterIcon />
              Filtros
            </button>
          </div>
          <div className="chips">
            {quickFilters.map((item) => (
              <button key={item} className={`pill ${item === 'Hoy' ? 'active' : ''}`}>
                {item}
              </button>
            ))}
            <button className="pill ghost">
              <TagIcon />
              Etiquetas
            </button>
          </div>
        </section>

        <section className="highlight-card">
          <div>
            <p className="eyebrow">Resumen inteligente</p>
            <h2>Eventos destacados listos para revisar</h2>
            <p className="subtitle">
              El sistema detectó patrones inusuales en 3 cámaras en los últimos 30 minutos.
            </p>
            <div className="actions-row">
              <button className="primary">Reproducir todo</button>
              <button className="ghost">
                <DownloadIcon />
                Exportar MP4
              </button>
            </div>
          </div>
          <div className="thumbnail-stack">
            {cameraClips.map((clip) => (
              <div key={clip.id} className="mini-card" style={{ backgroundColor: clip.color }}>
                <div className="mini-card-thumb" />
                <div>
                  <p className="mini-title">{clip.title}</p>
                  <p className="mini-meta">{clip.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Grabaciones recientes</p>
              <h3>Revisa lo último</h3>
            </div>
            <button className="ghost">
              <ListIcon />
              Ver todas
            </button>
          </div>
          <div className="cards-grid">
            {cameraClips.map((clip) => (
              <article key={clip.id} className="card">
                <div className="card-thumb" style={{ background: clip.color }}>
                  <div className="badge">{clip.length}</div>
                  <button className="play">
                    <PlayIcon />
                  </button>
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <div>
                      <h4>{clip.title}</h4>
                      <p className="meta">{clip.time}</p>
                    </div>
                    <button className="ghost small">
                      <DownloadIcon />
                      Guardar
                    </button>
                  </div>
                  <p className="meta">{clip.status}</p>
                  <div className="tags">
                    {clip.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Línea de tiempo</p>
              <h3>Actividad del día</h3>
            </div>
            <button className="ghost">
              <ClockIcon />
              06:00 - 18:00
            </button>
          </div>
          <div className="timeline">
            {timelineBlocks.map((block) => (
              <div key={block.label} className="timeline-block">
                <div className={`intensity level-${block.intensity}`} />
                <span>{block.label}</span>
              </div>
            ))}
          </div>
          <div className="playback">
            <div>
              <p className="eyebrow">Reproduciendo</p>
              <h4>Entrada principal · 09:25</h4>
              <p className="meta">02:15 · En la nube segura</p>
            </div>
            <div className="controls">
              <button className="pill ghost">
                <PlayIcon />
                Play/Pause
              </button>
              <button className="pill ghost">
                <DownloadIcon />
                Descargar
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => (
          <button key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
