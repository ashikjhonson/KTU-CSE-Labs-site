// app/api/github.js
export default async function handler(req, res) {
  const { owner, repo, path } = req.query;
  const response = await fetch(
    `https://api.github.com/repos/ashikjhonson/${repo}/contents/${path}`
  );
  const data = await response.json();
  res.status(200).json(data);
}

const fetchCode = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching code:", error);
  }
};
