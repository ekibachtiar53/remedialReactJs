import React from 'react'
import {Box, VStack, Text, IconButton} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

function CredentialsCard({ credential, onDelete }) {
    const navigate = useNavigate();

    
  return (
    <Box borderWidth={2} p={2} bg='gray.100' position='relative'>
        <VStack align='star'>
            <Text>{credential.name}</Text>
            <Text>{credential.url}</Text>
            <Text>Username: {credential.username}</Text>
            <Text>Password: {credential.password}</Text>
        </VStack>
        <Box position='absolute' bottom={2} right={1}>
            <IconButton icon={<EditIcon/>} onClick={() => navigate(`/credentials/${credential.id}/edit`)}/>
            <IconButton icon={<DeleteIcon/>} onClick={() => onDelete (credential.id)}/>
        </Box>
    </Box>
  )
}

export default CredentialsCard