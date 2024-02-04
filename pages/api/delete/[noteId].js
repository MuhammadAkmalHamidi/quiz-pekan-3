import axios from "axios";

export default async function handler(req, res) {
  try {
    const { noteId } = req.query;
    const response = await axios.delete(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${noteId}`,
    );
  } catch (error) {
    console.log(error);
  }
}
