import { Chip, Typography } from '@mui/material';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div  style={{ backgroundColor: '', margin: '0 0 15px 0' }}>
      <div className='box'>
        {tags.regular.map((t) => (
          <div key={t.tag.name}>
            
            {/* <Typography variant='h5' sx={{ fontWeight: 600, alignItems: 'center', justifyContent: 'center' }}> */}
           <Chip
            label={t.tag.name}
            />
            {/* </Typography> */}
            
            </div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className='box'>
          
          <p>Maybe</p>
          {tags.lowConfidence.map((t) => (
            <Chip key={t.tag.name}label={t.tag.name}/>
          ))}
          
        </div>
      )}
    </div>
  );
};
