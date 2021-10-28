// import { useState } from 'react'
import Layout from '@/components/Layout'
// import { Flex, Box} from '@chakra-ui/react'
// import NoticeBoard from '@/components/NoticeBoard'
// import styles from '@/styles/Chats.module.css'
// import { BsThreeDots } from 'react-icons/bs'

// const usersData = [
//   {
//     id: 1,
//     img: 'image',
//     name: 'John Snow',
//     time: '3mins',
//   },
//   {
//     id: 2,
//     img: 'image',
//     name: 'John Snow',
//     time: '3mins',
//   },
//   {
//     id: 3,
//     img: 'image',
//     name: 'John Snow',
//     time: '3mins',
//   },
//   {
//     id: 4,
//     img: 'image',
//     name: 'Mike Grey',
//     time: '3mins',
//   },
//   {
//     id: 5,
//     img: 'image',
//     name: 'Honnesy Roese',
//     time: '3mins',
//   },
//   {
//     id: 6,
//     img: 'image',
//     name: 'Mally Goerge',
//     time: '3mins',
//   },
//   {
//     id: 7,
//     img: 'image',
//     name: 'John Snow',
//     time: '3mins',
//   },
// ]

export default function MessagePage() {
  // const [users, setUsers] = useState(usersData)

  return (
    <Layout>
      <div>
        {/* <Flex>
          <Box width={['100%', '75%']} p='2'>
            <Box p='5' borderRadius='md'>
              <Flex>
                <div className={styles.activeUsers}>
                  <input
                    type='text'
                    className={styles.search}
                    placeholder='Search'
                  />
                  <div className={styles.header}>
                    <p>My Chat</p>
                    <BsThreeDots />
                  </div>

                  <ul className={styles.userList}>
                    {users.map((user) => (
                      <li key={user.id}>
                        <h2>
                          {user.img}{' '}
                          <span className={styles.notification}></span>
                        </h2>
                        <h4>{user.name}</h4>
                        <p>{user.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.chatBody}>
                  <div className={styles.heading}>
                    <h2>Mr Jude Odege</h2>
                    <Flex justify="center" alignItems='center'>
                      <p className={styles.not}></p>
                      <h4>Active Now</h4>
                    </Flex>
                  </div>

                  <div className={styles.chats}>
                    
                  </div>
                </div>
              </Flex>
            </Box>
          </Box>
          <Box width={['100%', '25%']} p='2' mt='2'>
            <NoticeBoard />
          </Box>
        </Flex> */}
      </div>
    </Layout>
  )
}
