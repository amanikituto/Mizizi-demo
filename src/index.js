
// Rafiki Text Generation
document.getElementById('rafiki-text-btn').addEventListener('click', function() {
  const textInput = document.getElementById('rafiki-text-input').value;
  // Call your Rafiki Text Generation API here with textInput
});

// Rafiki Image Generation
document.getElementById('rafiki-image-btn').addEventListener('click', function() {
  const imageInput = document.getElementById('rafiki-image-input').files[0];
  // Call your Rafiki Image Generation API here with imageInput
});

// Rafiki Speech Recognition
document.getElementById('rafiki-speech-btn').addEventListener('click', function() {
  // Call your Rafiki Speech Recognition API here
});
// Replace with your Azure endpoint and key
const azureEndpoint = 'https://your-azure-endpoint.comhttps://ai-amani302128626576.openai.azure.com/openai/deployments/rafiki/chat/completions?api-version=2023-03-15-preview';
const azureKey = 'c2c0a93f8abf41d9aa94b93e48be259b';

// Function to call the Azure model
function callAzureModel(inputData) {
  // The URL of your Azure model
  const url = `${azureEndpoint}/model`;

  // The headers for the API call
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${azureKey}`
  };

  // The data for the API call
  const data = {
    inputs: inputData
  };

  // Make the API call
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error('Error:', error);
  });
}

// Call the function with some example data
callAzureModel({ example: 'input data' });

// Get the search bar element
const searchBar = document.getElementById('kb-search');

// Add an event listener for the 'input' event
searchBar.addEventListener('input', (event) => {
  // Get the current text in the search bar
  const searchText = event.target.value;

  // If the search bar is not empty, search the knowledge base
  if (searchText !== '') {
    searchKnowledgeBase(searchText);
  }
});

// Function to search the knowledge base
function searchKnowledgeBase(query) {
  // The URL of your Azure AI Studio API
  const url = 'https://ai-amani302128626576.openai.azure.com/openai/deployments/rafiki/chat/completions?api-version=2023-03-15-preview';

  // The headers for the API call
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer your-azure-ai-studio-key`
  };

  // The data for the API call
  const data = {
    question: query
  };

  // Make the API call
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => response.json())
    // Handle the response data
    // For example, you could display the top result in the console
    console.log(data.answers[0].answer);
  }
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
  }); // Add a closing parenthesis here

document.getElementById('nlp-text-btn').addEventListener('click', function() {
  var inputText = document.getElementById('nlp-text-input').value;
  // Call your NLP text generation function here with inputText as parameter
  // Display the output in the 'nlp-text-output' div
});