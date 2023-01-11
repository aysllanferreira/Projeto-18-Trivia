const getToken = async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const { token } = await response.json();
  return token;
};

export default getToken;
