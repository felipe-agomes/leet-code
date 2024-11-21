function twoSum(nums: number[], target: number): number[] {
    for (let line = 0; line < nums.length; line++) {
        const lineNum = nums[line];
        const sumNum: number[] = [line];

        for (let column = 0; column < nums.length; column++) {
            const columnNum = nums[column];

            if (lineNum + columnNum === target && lineNum !== columnNum) {
                sumNum.push(column);

                return sumNum;
            }
        }
    }

    return [];
};