targetDir=converted

rm -rf $targetDir
mkdir $targetDir

for p in `find . -regextype posix-extended -iregex '^.*\.(jpe?g|png)'`
do
    f=${p##*/}
    b=${f%.*}
    e=${f##*.}
    echo "convert: $f"

    convert $p -resize 1440x768 -quality 70% $targetDir/$b-lg.webp
    convert $p -resize 900x768 -quality 60% $targetDir/$b-sm.webp
    convert $p -resize 1440x768 -quality 70% $targetDir/$b-lg.avif
    convert $p -resize 900x768 -quality 60% $targetDir/$b-sm.avif
    convert $p -resize 1440x768 -quality 70% $targetDir/$b-lg.jpeg
    convert $p -resize 900x768 -quality 60% $targetDir/$b-sm.jpeg
done

echo 'All images are converted!'