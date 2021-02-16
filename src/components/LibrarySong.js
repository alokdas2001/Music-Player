// shows song , name , artist

import React from 'react';

const LibrarySong = ({
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	songs,
	setSongs,
	id, // song.id
}) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song);
		// Set active song
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
		// check if song is playing
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? 'selected' : ''}`}
		>
			<img alt={song.name} src={song.cover}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
