const getToken = async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const { token } = await response.json();
  return token;
};

const getQuestions = async (token) => {
  const quantity = 5;
  const url = `https://opentdb.com/api.php?amount=${quantity}&token=${token}`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

export {
  getToken,
  getQuestions,
};
