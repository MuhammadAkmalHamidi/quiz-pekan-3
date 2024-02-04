import Axios from 'axios';
import Swal from 'sweetalert2';

export default async function AddNote(req, res) {
    try {
      const { title, description } = req.body;

      const response = await Axios.post('https://paace-f178cafcae7b.nevacloud.io/api/notes/', {
        title: title,
        description: description
      });
    } catch (error) {
        console.log(error);
    }

}
