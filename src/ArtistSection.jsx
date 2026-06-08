import React from 'react';
// Make sure these filenames match the files in src/assets/
import artistProfile from './assets/summerwave2.jpg';
import summerVibes from './assets/Summerwave.jpg';

function ArtistSection() {
  return (
    <section className="artist-section">
      <h2>Featured Artist</h2>
      <img src={artistProfile} alt="Artist Profile" style={{ width: '200px' }} />
      <img src={summerVibes} alt="Summer Vibes" style={{ width: '200px' }} />
      <p>Check out our latest summer sounds!</p>
    </section>
  );
}

export default ArtistSection;
