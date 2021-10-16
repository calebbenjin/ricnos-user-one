import { useRef, useState } from 'react';
import { Box, Input } from '@chakra-ui/react';
import styles from '@/styles/trackForm.module.css';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function TrackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const trackIdRef = useRef();
  const router = useRouter();

  const onSubmit = async () => {
    try {
      setLoading(true);
      router.push(`/tracking/${trackIdRef.current.value}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className={styles.trackForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="trackID"
          placeholder="Enter tracking ID"
          size="lg"
          {...register('trackID')}
          ref={trackIdRef}
        />
        <Button disabled={loading}>
          {loading ? 'Loading...' : 'Track item'}
        </Button>
      </form>
    </Box>
  );
}
