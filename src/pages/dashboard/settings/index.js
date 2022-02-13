import { useState, useEffect } from "react";
import SideNav from "@/components/SideNav";
import {
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  FormLabel,
  FormControl,
  Input,
  Heading,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import styles from "@/styles/Settings.module.css";
import { BsCamera } from "react-icons/bs";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import Button from "@/components/Button";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/lib/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import PageLoader from "@/components/PageLoader";

export default function SettingsPage({ user, token }) {
  // const [imagePreview, setImagePreview] = useState()
  const [imagePreview, setImagePreview] = useState(
    user && user.passport ? user.passport : null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    passport: "",
    first_name: user?.first_name ? user?.first_name : "",
    last_name: user?.last_name ? user?.last_name : "",
    phone: user?.phone ? user?.phone : "",
    email: user?.email ? user?.email : "",
    address: user?.addresses?.address ? user?.addresses?.address : "",
    address_one: user?.addresses?.second_address
      ? user?.addresses?.second_address
      : "",
    city: user?.addresses?.city ? user?.addresses?.city : "",
    state: user?.addresses?.state ? user?.addresses?.state : "",
    zip_code: user?.zip_code ? user?.zip_code : "",
    country: user?.addresses?.country ? user?.addresses?.country : "",
  });

  // console.log(imagePreview)

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  if (!user) {
    return <PageLoader />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/user/update_profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Something went Wrong");
    } else {
      const userData = await res.json();
      toast.success("Changes Saved");
      // console.log(userData)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async () => {
    const res = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const imageData = await res.json();
    // setImagePreview()
    console.log(imageData);
  };

  const handlePassportUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("passport", e.target.files[0], "[PROXY]");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${API_URL}/user/update_profile_image`, requestOptions)
      .then((result) => result.json())
      .then((data) => {
        if (data.success) {
          toast.success("Profile Image updated successfully");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  if (!user) {
    return null;
  }

  return (
    <Layout title="My Profile" data={user}>
      <Flex justify="space-between" wrap="wrap">
        <SideNav />

        <Box className={styles.profileSetting}>
          <ToastContainer />
          <div>
            <div className={styles.form} p="6">
              <Heading size="md" my="5">
                Profile Settings
              </Heading>
              <hr />

              <Box textAlign="center" className={styles.avatarBox}>
                <Avatar
                  size="2xl"
                  mt="10"
                  className={styles.avatar}
                  name={user && user.name}
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : user.passport
                      ? user.passport
                      : imagePreview
                  }
                >
                  <AvatarBadge
                    className={styles.avatarBadge}
                    borderRadius="md"
                    bg="red"
                    // onClick={() => setShowModal(true)}
                  >
                    {" "}
                    <input
                      accept="image/*"
                      onChange={handlePassportUpload}
                      required
                      type="file"
                      style={{ opacity: "0", position: "absolute" }}
                    />
                    <span>
                      <BsCamera
                        color="white"
                        className={styles.penIcon}
                        fontSize="1.5rem"
                      />
                    </span>
                  </AvatarBadge>
                </Avatar>
                <Modal
                  show={showModal}
                  onClose={closeModal}
                  title="Upload Profile"
                >
                  <ImageUpload token={token} imageUploaded={imageUploaded} />
                </Modal>
              </Box>

              <Box>
                <form onSubmit={handleSubmit}>
                  <Flex wrap="wrap" justify="space-between" mt="10">
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Firstname</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          size="lg"
                          id="firstname"
                          name="first_name"
                          placeholder="First Name"
                          value={values.first_name}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Lastname</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          size="lg"
                          id="lastname"
                          name="last_name"
                          placeholder="Lastname"
                          value={values.last_name}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Phone</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          size="lg"
                          id="phone"
                          name="phone"
                          placeholder="+234 810-000-0000"
                          value={values.phone}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Email Address</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          size="lg"
                          id="email"
                          name="email"
                          placeholder="Example@mail.com"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Box mb="4" width={["100%"]}>
                    <FormControl>
                      <FormLabel fontWeight="normal">Address 1</FormLabel>
                      <Input
                        borderColor="grey"
                        type="text"
                        size="lg"
                        id="address"
                        name="address"
                        placeholder="Address 1"
                        value={values.address}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box mb="4" width={["100%"]}>
                    <FormControl>
                      <FormLabel fontWeight="normal">Address 2</FormLabel>
                      <Input
                        borderColor="grey"
                        type="text"
                        size="lg"
                        id="address_one"
                        name="address_one"
                        placeholder="Address (Optional)"
                        value={values.address_one}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>

                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">City</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          id="city"
                          name="city"
                          size="lg"
                          placeholder="City"
                          value={values.city}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">State</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          id="state"
                          size="lg"
                          name="state"
                          placeholder="State"
                          value={values.state}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Zip Code</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          id="zipcode"
                          size="lg"
                          name="zip_code"
                          placeholder="Zip Code"
                          value={values.zip_code}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="4" width={["100%", "47%"]}>
                      <FormControl>
                        <FormLabel fontWeight="normal">Country</FormLabel>
                        <Input
                          borderColor="grey"
                          type="text"
                          size="lg"
                          id="country"
                          name="country"
                          placeholder="Country"
                          value={values.country}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Box textAlign="right" mb="20">
                    <Button type="submit" loading={isLoading}>
                      Save Changes
                    </Button>
                  </Box>
                </form>
              </Box>
            </div>
          </div>
        </Box>
      </Flex>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (token) {
    const resUser = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = await resUser.json();

    const { user } = userData.data;

    return {
      props: {
        user,
        token,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
