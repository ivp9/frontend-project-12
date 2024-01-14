import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';

import getModalComponent from './Modals';
import ChatBox from './ChatBox';
import fetchDataThunk from '../slices/thunks';
import { useAuth, useSocket } from '../hooks';
import { selectors as modalsSelectors } from '../slices/modalSlice';

const ChatPage = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const modalType = useSelector(modalsSelectors.selectModalType);
  const { getAuthHeader } = useAuth();
  const authHeaders = useMemo(() => ({ headers: getAuthHeader() }), [getAuthHeader]);
  const { t } = useTranslation();

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const fetchData = async () => {
      try {
        dispatch(fetchDataThunk(authHeaders));
        await socket.connectSocket();

        return () => socket.disconnectSocket();
      } catch (error) {
        toast.error(t('errors.invalidFeedback'));
      }
    };

    fetchData();
  }, [dispatch, socket, t, authHeaders]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <ChatBox />
      </Row>
      {getModalComponent(modalType)}
    </Container>
  );
};

export default ChatPage;
