import { render, screen } from '@testing-library/react';
import SocialMediaIcon from '@components/social-media-icon';
import iconMapper from '@components/social-media-icon/social-media.constant';

describe('Social media Icon', () => {
  it('Twitter Icon', () => {
    const PropsTest = {
      id: 'ivinayakg',
      type: 'twitter_id',
    };
    render(<SocialMediaIcon id={PropsTest.id} type={PropsTest.type} />);
    const Icon = screen.getByRole('img');
    expect(Icon).toHaveAttribute('src', iconMapper.twitter_id.src);
  });
  it('Github Icon', () => {
    const PropsTest = {
      id: 'shreya-mishra',
      type: 'github_id',
    };
    render(<SocialMediaIcon id={PropsTest.id} type={PropsTest.type} />);
    const Icon = screen.getByRole('img');
    expect(Icon).toHaveAttribute('src', iconMapper.github_id.src);
  });
  it('Linkedin Icon', () => {
    const PropsTest = {
      id: 'shubham-yadav-sy',
      type: 'linkedin_id',
    };
    render(<SocialMediaIcon id={PropsTest.id} type={PropsTest.type} />);
    const Icon = screen.getByRole('img');
    expect(Icon).toHaveAttribute('src', iconMapper.linkedin_id.src);
  });
});
