import  Axios  from "axios";

export default async function handler(req, res) {
  try {
    const { noteId } = req.query;
    const { title, description } = req.body;
    console.log(title);
    const response = await Axios.patch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${noteId}`,
      {
        title: title,
        description: description,
      }
      );
    } catch (error) {
      console.log(error);
    }
}
