import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/index.js';
import { Icons } from '../../components/ui/Icons.jsx';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <h1 className="notfound__title">Page not found</h1>
      <p className="notfound__sub">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        variant="primary"
        size="lg"
        onClick={() => navigate('/')}
        iconLeft={Icons.arrow}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
