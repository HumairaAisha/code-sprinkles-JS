const textInput = document.getElementById('text-input')
const btnSearch = document.getElementById('btnSearch')

const wordDefine = document.getElementById('word-define')
const wordPronouce = document.getElementById('word-pronouce')
const wordSpeech = document.getElementById('word-partofSpeech')
const wordExample = document.getElementById('word-examples')
const errorMessage = document.getElementById('errorMsg')

let wordMeaning = []

async function getWordMeaning() {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load words : ${response.status}`);
     
    }

    const json = await response.json();
    wordMeaning = json
    //console.log(json);

  } catch (error) {
    console.error(error.message);
  }
}
