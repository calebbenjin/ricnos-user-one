import { useState, useCallback } from "react";
import BannerCard from "@/components/BannerCard";
import Layout from "@/components/HomeLayout";
import CustomerSection from "@/components/CustomerSection";
import ExpartSection from "@/components/ExpartSection";
import Banner from "@/components/Banner";
import ExpectSection from "@/components/ExpectSection";
import LogisticSection from "@/components/LogisticSection";
import styles from "@/styles/Banner.module.css";
import style from "@/styles/ExpectSection.module.css";
import quoteStyles from "@/styles/QuoteSection.module.css";
import trackStyles from "@/styles/TrackTrace.module.css";
import quoteIcon from "@/asset/icons/quoteIcon.svg";
import trackIcon from "@/asset/icons/trackIcon.svg";
import Card from "@/components/Card";
import { useForm } from "react-hook-form";
import TrackForm from "@/components/TrackForm";
import Image from "next/image";
import Button from "@/components/Button";
import LoaderSpinner from "@/components/LoaderSpinner";
import { toast } from "react-toastify";
import DisplayCard from "@/components/DisplayCard";
// import FetchContext from '@/context/FetchContext'
import { API_URL } from "@/lib/index";

import {
  Heading,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  Text,
  Flex,
  FormControl,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

export default function Home({ vehicles, regions }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const quoteHandler = useCallback(async (data) => {
    setIsLoading(true);
    setError(null);
    fetch(`${API_URL}/get_quote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setResultData(result.data);
          toast.success(result.message);
          setShowResult(true);
          reset();
        } else {
          toast.error(result.message);
          setError(result.message);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleQuote = (data, e) => {
    e.preventDefault();
    quoteHandler(data);
  };

  return (
    <Layout>
      <Banner
        className={styles.home}
        card={<BannerCard />}
        title="THE MORE WE DO, THE MORE WE CAN DO."
        des="RICNOS is committed to customer service excellence and our business
            is based around solid values."
      />
      <ExpectSection className={style.section} />
      {/* <QuoteSection /> */}
      <Box className={quoteStyles.section}>
        <Container maxWidth="container.xl">
          <Flex mb={3} justify="center" wrap="wrap" py="20">
            <Box
              width={[
                "100%", // 0-30em
                "50%", // 62em+
              ]}
              pr="2"
              mb={10}
            >
              <Heading size="md" color="white" mb="10">
                Dedicated Customer Teams And An Agile Service{" "}
              </Heading>
              <Heading size="xl" color="white">
                We Partner With Brands To Help Them Deliver Top Notch Services
                To Their Customers.
              </Heading>
            </Box>
            <Box
              width={[
                "100%", // 0-30em
                "50%", // 62em+
              ]}
              pl="2"
            >
              <Flex justify="space-between">
                <Box>
                  <Box
                    as="div"
                    width="20"
                    height="2"
                    bg="red"
                    borderRadius="md"
                    mb={4}
                  ></Box>
                  <Text color="white">Transportation Pricing</Text>
                </Box>
                <Box>
                  <Box
                    as="div"
                    width="20"
                    height="2"
                    bg="red"
                    borderRadius="md"
                    mb={4}
                  ></Box>
                  <Text color="white">Fast, Efficient Delivery</Text>
                </Box>
                <Box>
                  <Box
                    as="div"
                    width="20"
                    height="2"
                    bg="red"
                    borderRadius="md"
                    mb={4}
                  ></Box>
                  <Text color="white">Transparent Pricing</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>

          {/* <TrackTrace /> */}

          <div className={trackStyles.trackForm}>
            <Container
              maxWidth="container.xl"
              className={trackStyles.traceBody}
            >
              <Tabs isFitted variant="enclosed">
                <TabList>
                  <Tab color="white" bg="red" py="4">
                    <Image
                      src={quoteIcon}
                      width="40"
                      alt="quoteIcon"
                      height="40"
                    />
                    <Text as="h4" fontSize="lg" color="white" ml="2">
                      Get a quote
                    </Text>
                  </Tab>
                </TabList>
                <TabPanels
                  borderRadius="lg"
                  className={trackStyles.card_body}
                  boxShadow="lg"
                >
                  <TabPanel p="5" bg="white">
                    <Flex mb={3} justify="space-between" wrap="wrap">
                      <Box width={["100%", "75%"]}>
                        <div className={quoteStyles.formCard}>
                          <form onSubmit={handleSubmit(handleQuote)}>
                            <Text mb="2" fontWeight="bold">
                              Personal Data
                            </Text>
                            <Flex
                              alignItems="center"
                              justify="space-between"
                              wrap="wrap"
                            >
                              <Box mb="3" width={["100%", "32%"]}>
                                <FormControl>
                                  <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    name="name"
                                    required
                                    {...register("name", {
                                      required: "Name is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                              <Box mb="3" width={["100%", "32%"]}>
                                <FormControl>
                                  <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                    {...register("email", {
                                      required: "Email is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                              <Box mb="3" width={["100%", "32%"]}>
                                <FormControl>
                                  <input
                                    type="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    name="phone"
                                    required
                                    {...register("phone", {
                                      required: "Phone is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                            </Flex>

                            <Text mb="2" mt="4" fontWeight="bold">
                              Shippment Data
                            </Text>

                            <Box mt="4" width={["100%", "100%"]}>
                              <FormControl>
                                <input
                                  type="text"
                                  id="description"
                                  placeholder="Item Description"
                                  name="description"
                                  required
                                  {...register("description", {
                                    required: "Description is required",
                                  })}
                                />
                              </FormControl>
                            </Box>
                            <Flex wrap="wrap" justify="space-between" mt="4">
                              <Box mb="3" width={["100%", "47%"]}>
                                <FormControl>
                                  <input
                                    type="text"
                                    id="departure"
                                    placeholder="Departure"
                                    name="departure"
                                    required
                                    {...register("departure", {
                                      required: "Departure is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                              <Box mb="3" width={["100%", "47%"]}>
                                <FormControl>
                                  <input
                                    type="text"
                                    id="arrival"
                                    placeholder="Arrival"
                                    name="arrival"
                                    required
                                    {...register("arrival", {
                                      required: "Arrival is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                            </Flex>
                            <Flex wrap="wrap" justify="space-between">
                              <Box mb="3" width={["100%", "25%"]}>
                                <FormControl>
                                  <select
                                    id="region"
                                    name="region"
                                    required
                                    {...register("region", {
                                      required: "Region is required",
                                    })}
                                  >
                                    <option>Region</option>
                                    {regions.map((item) => (
                                      <option
                                        key={item.region_id}
                                        value={item.region_id}
                                      >
                                        {item.routes}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                              </Box>
                              <Box mb="3" width={["100%", "32%"]}>
                                <FormControl>
                                  <select
                                    id="vehicle"
                                    name="vehicle"
                                    required
                                    {...register("vehicle", {
                                      required: "Vehicle is required",
                                    })}
                                  >
                                    <option>Select vehicles</option>
                                    {vehicles.map((item) => (
                                      <option key={item.id} value={item.id}>
                                        {item.type}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                              </Box>
                              <Box width={["100%", "15%"]} mb="4">
                                <FormControl>
                                  <input
                                    type="text"
                                    id="weight"
                                    placeholder="Weight"
                                    name="weight"
                                    required
                                    {...register("weight", {
                                      required: "Weight is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                              <Box width={["100%", "20%"]}>
                                <FormControl>
                                  <input
                                    type="text"
                                    id="value"
                                    name="value"
                                    placeholder="Item value"
                                    required
                                    {...register("value", {
                                      required: "Value is required",
                                    })}
                                  />
                                </FormControl>
                              </Box>
                            </Flex>

                            <Flex justify="space-between">
                              <Box width={["100%", "70%"]}>
                                <Stack
                                  spacing={5}
                                  direction={["column", "row"]}
                                  my="6"
                                >
                                  <Checkbox colorScheme="red">Fragile</Checkbox>
                                  <Checkbox colorScheme="red">
                                    Express Delivery
                                  </Checkbox>
                                </Stack>
                              </Box>
                            </Flex>

                            <Button type="submit" loading={isLoading}>
                              SEND
                            </Button>
                          </form>

                          {showResult ? (
                            <DisplayCard title="Shippment Quotation Result">
                              {/* <Text fontSize='lg' textTransform='capitalize'>
                              <b>Item Weight:</b> 3 kg
                            </Text> */}
                              <Text
                                fontSize="lg"
                                textTransform="capitalize"
                                mt="2"
                              >
                                <b>Analysis:</b> {resultData.analysis}
                              </Text>
                              <Text
                                fontSize="lg"
                                textTransform="capitalize"
                                mt="2"
                              >
                                <b>Cost:</b> N{resultData.quote}
                              </Text>
                            </DisplayCard>
                          ) : null}
                        </div>
                      </Box>
                      <Box width={["100%", "23%"]}>
                        <Card
                          title="Take Your Career To Next Level"
                          description="We pride ourselves on proving the best transportation and shipping services in Nigeria"
                        />
                      </Box>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Container>
          </div>
        </Container>
      </Box>
      <LogisticSection />
      <CustomerSection />
      <ExpartSection />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/quote_data`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const quoteData = await res.json();

  const { vehicles, regions } = quoteData.data;

  return {
    props: {
      vehicles,
      regions,
    },
  };
}
