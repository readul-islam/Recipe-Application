import axios from 'axios';

const uploadCloudinary = async (file) => {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', 'ml_default');
	const { data } = await axios.post(
		'https://api.cloudinary.com/v1_1/duby7qes4/image/upload',
		formData
	);
	return { publicId: data.public_id, url: data.secure_url };
};
/* import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'duby7qes4', 
  api_key: '668698963574844', 
  api_secret: '_npgK-tIiErp0stEmDXtNnGHXXU' 
}); */
export default uploadCloudinary;
