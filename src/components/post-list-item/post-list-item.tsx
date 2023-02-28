import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import useDateFormatters from '../../hooks/use-date-formatter';
import {Post} from '../../types/post';
import styles from './post-list-item.styles';

type PostListItemProps = {
  post: Post;
  onPress?: () => void;
  onLongPress?: () => void;
};

const PostListItem = memo(({post, onPress, onLongPress}: PostListItemProps) => {
  const {dayShortMonthTime} = useDateFormatters();

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={!onPress}
      style={styles.post}>
      <Box
        maxW="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: post.image,
              }}
              fallbackSource={{
                uri: 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {post.title}
            </Heading>
          </Stack>
          <Text fontWeight="400" numberOfLines={5} maxW={400}>
            {post.text}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                fontSize="sm"
                _light={{
                  color: 'primary.600',
                }}
                _dark={{
                  color: 'violet.400',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
                numberOfLines={1}
                maxW={400}>
                {post.url}
              </Text>
            </HStack>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                fontSize="xs"
                _light={{
                  color: 'muted.300',
                }}
                _dark={{
                  color: 'violet.400',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
                numberOfLines={1}
                maxW={400}>
                {dayShortMonthTime(post.updated_at)}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </TouchableOpacity>
  );
});

export default PostListItem;
