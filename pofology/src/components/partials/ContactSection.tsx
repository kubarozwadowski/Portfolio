import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  return (
    <>
      <div className="mt-14 w-full h-96 relative">
        <Image src="/images/map.svg" layout="fill" className="object-contain dark:invert" alt="map" />
      </div>
    </>
  );
};

export default ContactSection;
