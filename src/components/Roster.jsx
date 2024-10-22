import React from 'react';
import { useLocation } from 'react-router-dom';

const Roster = () => {
    const location = useLocation();
    const { stats } = location.state || {};
    const { formData } = location.state || {};

    const positionsMap = {
        pointGuard: 'PG',
        shootingGuard: 'SG',
        smallForward: 'SF',
        center: 'C',
        guard: 'G',
        forward: 'F',
        utility1: 'UTL',
        utility2: 'UTL',
        utility3: 'UTL',
        bench1: 'BH',
        bench2: '',
        bench3: ''
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen p-5 mt-36'>
            <div className='w-11/12 overflow-x-auto'>
                <h1 className='text-3xl mb-4 text-center font-bold'>Projected Fantasy Stats</h1>
                <table className='min-w-full border-collapse'>
                    <thead>
                        <tr className='bg-customBlue text-white'>
                            <th className='border p-3'>Position</th>
                            <th className='border p-3'>Player Name</th>
                            <th className='border p-3'>Total Fantasy Points</th>
                            <th className='border p-3'>Games Played</th>
                            <th className='border p-3'>Rebounds</th>
                            <th className='border p-3'>Assists</th>
                            <th className='border p-3'>Steals</th>
                            <th className='border p-3'>Blocks</th>
                            <th className='border p-3'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats && stats.length > 0 ? (
                            stats.map((player, index) => (
                                <tr key={index} className={`hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className='border p-3'>{player.playerPosition}</td>
                                    <td className='border p-3'>{player.playerName}</td>
                                    <td className='border p-3'>{player.totalFantasyPoints}</td>
                                    <td className='border p-3'>{player.gamesPlayed}</td>
                                    <td className='border p-3'>{player.totalRebounds}</td>
                                    <td className='border p-3'>{player.assists}</td>
                                    <td className='border p-3'>{player.steals}</td>
                                    <td className='border p-3'>{player.blockedShots}</td>
                                    <td className='border p-3'>{player.totalPoints}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className='text-center border p-3'>No Player Stats Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h1 className='text-3xl mb-4 text-center font-bold mt-5'>News</h1>
            </div>
        </div>
    );
};


export default Roster;
