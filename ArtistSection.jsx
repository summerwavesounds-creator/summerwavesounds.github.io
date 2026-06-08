import React from 'react';
import artistProfile from './assets/694785182_4334793436737116_6867958973355933936_n.jpg';
import summerVibes from './assets/Summerwave.jpg';

const ArtistSection = () => {
  const videos = [
    "3SzARMybdbk", "aRWlJnwGEkw", "Aluy6rWdnW0", "Qk4qBu4jWeQ", 
    "flmE6i-wpJ8", "KyvEycsXOvY", "LnJ_QgHIBdA", "jfLPY3LBVmU", 
    "4L37w4n6ks4", "iwuh4xODQTc", "WivN8WDgjCU"
  ];

  const playlists = [
    { title: "Summer Wave 1", id: "PL9LAITeGWgi4gh00BrS_KNOuZb1bOghIG" },
    { title: "Summer Wave 2", id: "PL9LAITeGWgi4ik8WsHumW6MEkll162g7F" },
    { title: "Summer Wave 3", id: "PL9LAITeGWgi5izmYjs5EXnizApn7qjyif" },
    { title: "Summer Wave 4", id: "PL9LAITeGWgi54VvrnllbSaDa_wEYucvQa" },
    { title: "Summer Wave 5", id: "PL9LAITeGWgi6aeNTay99Qfqq-qOLhMkRH" }
  ];

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>About the Artist</h2>
      <img src={artistProfile} alt="Artist" style={{ width: '300px', borderRadius: '10px' }} />
      <img src={summerVibes} alt="Summer Vibes" style={{ width: '300px', borderRadius: '10px', marginLeft: '10px' }} />
      <p>Passionate creator of coastal vibes and sunset soundscapes.</p>

      <h2>Featured Videos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {videos.map(id => (
          <iframe key={id} width="200" height="150" src={`https://www.youtube.com/embed/${id}`} title="YouTube video" allowFullScreen></iframe>
        ))}
      </div>

      <h2>Curated Playlists</h2>
      <ul>
        {playlists.map(list => (
          <li key={list.id}>
            <a href={`https://youtube.com/playlist?list=${list.id}`} style={{ color: '#00aaff' }}>{list.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistSection;
