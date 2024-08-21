import { useState, useEffect } from 'react';
import Layout from '../components/layout';

export default function Home() {
  const [name, setName] = useState('');
  const [ummyName, setUmmyName] = useState('');
  const [showUmmyName, setShowUmmyName] = useState(false);

  const ummyfy = () => {
    let newName;

    if (name.includes(' ')) {
      // Split the name into words
      const words = name.split(' ');
      newName = words.map((word) => ummyfyWord(word)).join(' ');
    } else {
      newName = ummyfyWord(name);
    }

    // Set ummyName and show it
    setUmmyName(newName);
    setShowUmmyName(true);
  };

  const ummyfyWord = (word: string) =>
    {
    const vowelsAndSome = ['a', 'e', 'i', 'o', 'u', 'y'];
    let output = '';
    if (word.endsWith('mmy')) {
      output = "Ummy";
    } else {
      // Get the first vowel
      let firstVowelIndex = 0;
      for (let i = 0; i < word.length; i++) {
        if (vowelsAndSome.includes(word[i].toLowerCase())) {
          firstVowelIndex = i;
          break;
        }
      }
      
      output = word.slice(0, firstVowelIndex + 1) + 'mmy';
    }

    // Capitalize the first letter
    return output.charAt(0).toUpperCase() + output.slice(1);
  }

  // Use useEffect to reset ummyName when the name input changes
  useEffect(() => {
    setUmmyName('');
    setShowUmmyName(false);
  }, [name]);

  return (
    <Layout home>
      {!showUmmyName && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl mb-10 font-erica-one text-white">Ummy'fy your name</h1>
          <input
            className="bg-cool-secondary text-cool-text border rounded p-2 w-80 mb-2"
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-cool-primary text-white rounded-full p-2 mt-2 cursor-pointer w-80"
            onClick={ummyfy}
          >
            Ummy'fy Name
          </button>
        </div>
      )}

      {showUmmyName && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-7xl mb-10 font-erica-one text-white animate-epic">
            {ummyName}
          </h1>
        </div>
      )}
    </Layout>
  );
}
