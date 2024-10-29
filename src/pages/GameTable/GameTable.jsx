import { useState } from 'react'
import { Table, Input, Flex } from 'antd'
import games from '../../data/gamesData.json'
import './GameTable.scss'

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
    <div className="game-table-parent">
      <Flex vertical align="center" justify="center" className="game-table-container">
        <div className="game-search-bar">
          <Search placeholder="Search games" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Table
          bordered
          className="game-table-wrapper"
          scroll={{ x: 1024 }}
          columns={columns}
          dataSource={filteredGames}
          rowKey="name"
        />
      </Flex>
    </div>
  )
}

export default GameTable
