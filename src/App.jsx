import { useState } from 'react';
import Colors from './components/Colors';
import Form from './components/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Values from 'values.js';

const App = () => {
  const getColors = (color) => new Values(color).all(10);
  const [input, setInput] = useState('');
  const [colors, setColors] = useState(getColors('#f15025'));
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setColors(getColors(input));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCopyToClipboard = (hex) => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <main>
      <Form setInput={setInput} handleSubmit={handleSubmit} input={input} />
      <Colors colors={colors} handleCopyToClipboard={handleCopyToClipboard} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
