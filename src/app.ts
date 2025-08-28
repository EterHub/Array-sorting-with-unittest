// src/merge.ts
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1; 

  console.log('Merging:', collection_1, collection_2, collection_3);

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const options: { val: number; src: 'c1' | 'c2' | 'c3' }[] = [];

    if (i < collection_1.length) options.push({ val: collection_1[i], src: 'c1' });
    if (j < collection_2.length) options.push({ val: collection_2[j], src: 'c2' });
    if (k >= 0) options.push({ val: collection_3[k], src: 'c3' });

    let minIndex = 0;
    for (let idx = 1; idx < options.length; idx++) {
      if (options[idx].val < options[minIndex].val) minIndex = idx;
    }

    result.push(options[minIndex].val);

    if (options[minIndex].src === 'c1') i++;
    else if (options[minIndex].src === 'c2') j++;
    else k--;
  }
  console.log('Merged result:', result);
  return result;
}
