import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { getQuestions } from '../constants/apiTrivia';
import { setPlayers, setAssertions } from '../redux/reducers/player';
import { setTimer } from '../redux/reducers/timer';
import './Game.scss';

function Game() {
  const { timer } = useSelector((state) => state.timer);
  const player = useSelector((state) => state.player);

  const history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [indexQuestions, setIndexQuestions] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [timeout, setTimeout] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [registerAssertions, setRegisterAssertions] = useState(0);

  useEffect(() => {
    const testaToken = async () => {
      const token = localStorage.getItem('token');
      const response = await getQuestions(token);
      if (response.length === 0) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        setQuestions(response);
      }
    };
    testaToken();
  }, [history]);

  const shuffleAnswers = () => {
    if (questions.length === 0) return;
    const correct = {
      value: questions[indexQuestions]?.correct_answer,
      correct: true,
    };

    const incorrect = questions[indexQuestions]?.incorrect_answers.map((value) => ({
      value,
      correct: false,
    }));

    const allAnswers = [
      correct,
      ...incorrect,
    ];

    const shuffledAnswers = allAnswers.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAnswers(shuffledAnswers);
  };

  useEffect(() => {
    const magic = 4;
    if (indexQuestions <= magic) shuffleAnswers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, indexQuestions]);

  const handleClick = ({ target }) => {
    const { id } = target;
    const isTrue = id === 'correct-true';
    const dificuldade = questions[indexQuestions].difficulty;
    let diff = 0;
    if (dificuldade === 'easy') {
      diff = 1;
    } else if (dificuldade === 'medium') {
      diff = 2;
    } else {
      const magic = 3;
      diff = magic;
    }
    if (isTrue) {
      const magic = 10;
      const resultado = magic + (timer * diff);
      dispatch(setPlayers({ ...player, score: player.score + resultado }));
      setRegisterAssertions(registerAssertions + 1);
      setTimeout(true);
    } else ;
    setAnswered(true);
    // Valeu Trybe por fazer nos fazer isso.
    // setIndexQuestions(0);
    setIsButtonVisible(true);
    setTimeout(true);
  };

  const handleNextClick = () => {
    const magic = 30;
    setIsButtonVisible(false);
    setAnswered(false);
    setTimeout(false);
    dispatch(setTimer(magic));
    setIndexQuestions(indexQuestions + 1);
  };

  useEffect(() => {
    const magic = 1000;
    let interval = null;
    if (timer > 0 && !answered) {
      interval = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, magic);
    } else {
      setTimeout(true);
      setIsButtonVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer, dispatch, answered]);

  useEffect(() => {
    const magic = 5;

    if (indexQuestions === magic) {
      dispatch(setAssertions(registerAssertions));
      history.push('/feedback');
    }
    // history.push
  }, [indexQuestions, history]);

  return (
    <>
      <div className="img" />

      <div className="Game">
        <Header />
        <p data-testid="timer" className="Game__timer">
          Time:
          {' '}
          {timer}
        </p>
        <h1
          data-testid="question-category"
          className="Game__category"
        >
          {questions[indexQuestions]?.category}

        </h1>
        <h2
          data-testid="question-text"
          className="Game__questions"
        >
          {questions[indexQuestions]?.question}

        </h2>
        <div
          data-testid="answer-options"
        >
          {answers.map((answer, index) => (
            <button
              className="Game__buttons"
              type="button"
              id={ `correct-${answer.correct}` }
              key={ index }
              placeholder={ questions[indexQuestions]?.difficulty }
              data-testid={ answer.correct ? 'correct-answer' : `wrong-answer-${index}` }
              onClick={ handleClick }
              disabled={ timeout }
              style={
                answered
                  ? { border: answer.correct
                    ? '3px solid rgb(6, 240, 15)' : '3px solid red' }
                  : { border: '3px solid black' }
              }
            >
              {answer.value}
            </button>
          ))}
        </div>
        { isButtonVisible && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ handleNextClick }
            className="Game__next"
          >
            Next
          </button>)}
      </div>
    </>
  );
}

export default Game;
