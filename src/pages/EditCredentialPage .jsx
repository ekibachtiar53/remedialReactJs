import { useState, useEffect } from 'react'
import { Heading, VStack, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

function EditCredentialPage () {
    const navigate = useNavigate();
    const params = useParams();

    const fetchDetailById = async (id) => {
        try{
            const response = await fetch(`http://localhost:3366/credentials/${id}`);
            const data = await response.json();

            setName(data.name);
            setUrl(data.url);
            setUsername(data.username);
            setPassword(data.password);

        } catch(error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchDetailById(params.id);
    }, [params.id]);

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await fetch(`http://localhost:3366/credentials/${params.id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                url: url,
                username: username,
                password: password,
            }),
          })

          navigate("/credentials");
        } catch(error){
            console.error(error);
        }
    };
     
  return (
    <VStack spacing={4} w='100%'>
        <Heading as='h2' size='xl'>
            Edit Credentials
        </Heading>
        <Box w='80%'>
            <form onSubmit={handleSubmit }>
                <VStack>
                    <FormControl>
                        <FormLabel>Nama</FormLabel>
                        <Input type='text' placeholder='pleace enter name' w='100%'
                        onChange={(e) => setName(e.target.value)} value={name}/>
                        <FormLabel>URL</FormLabel>
                        <Input type='text' placeholder='pleace enter url' w='100%'
                        onChange={(e) => setUrl(e.target.value)} value={url}/>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' placeholder='pleace enter username' w='100%'
                        onChange={(e) => setUsername(e.target.value)} value={username}/>
                        <FormLabel>Password</FormLabel>
                        <Input type='text' placeholder='pleace enter password' w='100%'
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </FormControl>
                    <Button colorScheme='blue' w='100%' type='submit'>Add Credential</Button>
                </VStack>
            </form>
        </Box>
    </VStack>
  )
}

export default EditCredentialPage 