import { Flex } from 'antd'

const PageNotFound = () => {
  return (
    // Added inline style beacuse for one page there is no need to create a new file as it increases chunk processing
    <Flex justify="center" style={{ height: '90vh' }} align="center">
      <h1>404 - Page Not Found</h1>
    </Flex>
  )
}

export default PageNotFound
