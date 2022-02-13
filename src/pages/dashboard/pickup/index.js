import { useRouter } from "next/router";

import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  FormControl,
  Flex,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { API_URL } from "@/lib/index";
import { parseCookies } from "@/helpers/index";
import Loading from "@/components/Loader";
import PageLoader from "@/components/PageLoader";

export default function PickupPage({ user, token }) {
  const [userDetails, setUserDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [itemsList, setItemsList] = useState([
    {
      item: "",
      quantity: "",
      value: "",
      image: "",
      weight: "",
    },
  ]);
  const [regions, setRegions] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return <PageLoader />;
    }
  });

  const getItemNames = () => {
    return itemsList?.map((item) => item.item);
  };

  const getItemQuantities = () => {
    return itemsList?.map((item) => item.quantity);
  };

  const getItemImages = () => {
    return itemsList?.map((item) => item.image);
  };

  const getItemWeights = () => {
    return itemsList?.map((item) => item.weight);
  };

  const getItemValues = () => {
    return itemsList?.map((item) => item.value);
  };

  const getItemHeights = () => {
    return itemsList?.map((item) => item.height);
  };

  const getQuoteData = useCallback(async () => {
    const res = await fetch(`${API_URL}/quote_data`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const quote_data = await res.json();

    setRegions(quote_data.data.regions);
    setVehicles(quote_data.data.vehicles);
  }, []);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [delivery_method, setDeliveryMethod] = useState("");
  const [sender_address, setSenderAddress] = useState("");
  const [region, setRegionID] = useState("");
  const [vehicle_id, setVehicleID] = useState("");
  const [collector_name, setCollectorName] = useState("");
  const [collector_phone, setCollectorPhone] = useState("");
  const [collector_email, setCollectorEmail] = useState("");

  const [description, setDescription] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  useEffect(() => {
    if (user) {
      setUserDetails(user);
      setSenderAddress(user.addresses.address);
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    // if (isLoading) {
    // }

    getQuoteData();
  }, [getQuoteData]);

  const handleCreateOrder = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();

    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("address", address);
    formdata.append("delivery_method", delivery_method);
    formdata.append("collector_phone", collector_phone);
    formdata.append("collector_email", collector_email);
    formdata.append("collector_name", collector_name);
    formdata.append("vehicle_id", vehicle_id);
    formdata.append("description", description);
    formdata.append("region", region);
    formdata.append("sender_address", sender_address);

    getItemNames().map((item) => formdata.append("item[]", item));
    getItemQuantities().map((item) => formdata.append("quantity[]", item));
    getItemImages().map((item) => formdata.append("image[]", item, "[PROXY]"));
    getItemWeights().map((item) => formdata.append("weight[]", item));
    getItemValues().map((item) => formdata.append("value[]", item));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const res = await fetch(
        `${API_URL}/user/order/createOrder`,
        requestOptions
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = (e) => {
    setProcessingOrder(true);
    e.preventDefault();
    handleCreateOrder()
      .then((res) => {
        router.push(`/dashboard/pickup/${res.data.order.id}/confirm`);
      })
      .catch((err) => {
        setProcessingOrder(false);
        console.error(err);
      });
  };

  const handleItemInputChange = (e, index) => {
    const { name, value, files } = e.target;
    const list = [...itemsList];

    if (files) {
      list[index][name] = files[0];
    } else {
      list[index][name] = value;
    }

    setItemsList(list);
  };

  const handleAddItem = () => {
    setItemsList((prev) => [
      ...prev,
      {
        item: "",
        quantity: "",
        value: "",
        image: "",
        weight: "",
      },
    ]);
  };

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // });

  // if (!user) {
  //   return null;
  // }

  return (
    <Layout title="Request for Pickup" data={user}>
      <Container maxWidth="container.lg">
        <Box>
          <Heading size="lg" my="10">
            Order a Pickup
          </Heading>

          {processingOrder ? <Loading title="Processing your order" /> : null}

          {!isLoading && (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                padding: "20px",
                marginBottom: "5rem",
              }}
            >
              <Text textAlign="left" mb="4" mt="7" fontWeight="bold">
                Personal Data
              </Text>
              <Flex wrap="wrap" justify="space-between">
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl cursor="not-allowed">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={`${userDetails?.name}`}
                      required
                      disabled
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl cursor="not-allowed">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={userDetails.email}
                      required
                      disabled
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl cursor="not-allowed">
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                      value={userDetails.phone}
                      required
                      disabled
                    />
                  </FormControl>
                </Box>
              </Flex>

              <Box mb="3" mt="5" width={["100%", "100%"]}>
                <FormControl>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    value={sender_address}
                    onChange={(e) => setSenderAddress(e.currentTarget.value)}
                    required
                  />
                </FormControl>
              </Box>

              <Text textAlign="left" mb="4" mt="7" fontWeight="bold">
                Shipping Data
              </Text>
              <Flex wrap="wrap" justify="space-between">
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="recieverName"
                      placeholder="Recievers Name"
                      value={collector_name}
                      onChange={(e) => setCollectorName(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={collector_email}
                      onChange={(e) => setCollectorEmail(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                      value={collector_phone}
                      onChange={(e) => setCollectorPhone(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Box mb="3" width={["100%", "100%"]}>
                <FormControl>
                  <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormControl>
              </Box>
              <Flex wrap="wrap" justify="space-between" mt="4">
                <Box mb="3" width={["100%", "45%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="departure"
                      placeholder="Departure"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "45%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="arrival"
                      placeholder="Arrival"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex wrap="wrap" justify="space-between" mt="4">
                <Box mb="3" width={["100%", "65%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="address"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="City"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex wrap="wrap" justify="space-between" mt="4">
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <input
                      type="text"
                      id="state"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <select
                      placeholder="Region"
                      required
                      name="region"
                      value={region}
                      onChange={(e) => setRegionID(e.currentTarget.value)}
                    >
                      <option>Select Region</option>
                      {regions?.map((region) => (
                        <option key={region.region_id} value={region.region_id}>
                          {region.routes}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <select
                      placeholder="vehicles"
                      required
                      name="vehicle"
                      value={vehicle_id}
                      onChange={(e) => setVehicleID(e.currentTarget.value)}
                    >
                      <option value="option1">Select vehicles</option>
                      {vehicles?.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.type}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </Box>
                <Box mb="3" width={["100%", "30%"]}>
                  <FormControl>
                    <select
                      placeholder="Delivery Method"
                      name="delivery_method"
                      required
                      value={delivery_method}
                      onChange={(e) => setDeliveryMethod(e.currentTarget.value)}
                    >
                      <option value="option1">Delivery Method</option>
                      <option value="Home">Home</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </FormControl>
                </Box>
              </Flex>
              {itemsList.map((item, i) => (
                <div key={i}>
                  <Text textAlign="left" mb="4" mt="7" fontWeight="bold">
                    Items (item {i + 1})
                  </Text>
                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="3" width={["100%", "30%"]}>
                      <FormControl>
                        <input
                          type="text"
                          name="item"
                          id="name"
                          placeholder="Item Name"
                          value={item.item}
                          onChange={(e) => handleItemInputChange(e, i)}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="3" width={["50%", "15%"]}>
                      <FormControl>
                        <input
                          type="text"
                          name="quantity"
                          id="quantity"
                          placeholder="Quantity"
                          value={item.quantity}
                          onChange={(e) => handleItemInputChange(e, i)}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="3" width={["100%", "30%"]}>
                      <FormControl>
                        <input
                          type="text"
                          id="value"
                          name="value"
                          placeholder="Item Valued Amount"
                          value={item.value}
                          onChange={(e) => handleItemInputChange(e, i)}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap="wrap" justify="space-between">
                    <Box mb="3" width={["100%", "15%"]}>
                      <FormControl>
                        <input
                          type="text"
                          id="weight"
                          name="weight"
                          placeholder="Weight"
                          value={item.weight}
                          onChange={(e) => handleItemInputChange(e, i)}
                        />
                      </FormControl>
                    </Box>
                    <Box mb="3" width={["100%", "50%"]}>
                      <FormControl>
                        <input
                          type="file"
                          id="image"
                          placeholder="Image"
                          name="image"
                          onChange={(e) => handleItemInputChange(e, i)}
                        />
                      </FormControl>
                    </Box>
                    <Stack spacing={5} direction={["column", "row"]} my="6">
                      <Checkbox colorScheme="red">Fragile</Checkbox>
                    </Stack>
                  </Flex>
                </div>
              ))}

              <Text
                cursor="pointer"
                textAlign="left"
                mb="4"
                mt="10"
                fontWeight="bold"
                width="fit-content"
                onClick={handleAddItem}
              >
                Add more items
              </Text>

              <Button type="submit" loading={isLoading}>
                Checkout
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (token) {
    const res = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resData = await res.json();
    const { user } = resData.data;

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
