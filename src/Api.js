export const postIdeas = async (idea) => {
  return await fetch( 'http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: '',
      title: '',
    })
  })
};

export const fetchData = async () => {
  return await fetch('http://localhost:3001/api/v1/urls').then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('You Shall Not Pass!')
    }
  })
};