import { useState } from 'react'
import { Table, Input } from 'antd'
import games from '../../data/gamesData.json'

const { Search } = Input

const GameTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
      sorter: (a, b) => a.ranking - b.ranking
    },
    {
      title: 'Total Players',
      dataIndex: 'totalPlayers',
      key: 'totalPlayers',
      sorter: (a, b) => a.totalPlayers - b.totalPlayers
    }
  ]

  return (
    <div>
      <Search
        placeholder="Search games"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredGames} rowKey="name" />
    </div>
  )
}

export default GameTable
