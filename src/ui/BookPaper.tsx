import { INK, PAPER, type PrintPage } from "../lib/bookLayout";

export function BookPaper({ page }: { page: PrintPage }) {
  return <svg className="book-paper" viewBox="0 0 148 210" role="img" aria-label={`Страница ${page.number}`}>
    <desc>{page.text.map((line) => line.text).join(" ")}</desc>
    <rect width="148" height="210" fill={PAPER} />
    <image href="/brand/botanical-branch-watercolor.png" x="119" y="2" width="27" height="43" opacity=".10" />
    {page.images.map((image, index) => <image key={index} href={image.url} x={image.x} y={image.y} width={image.w} height={image.h} />)}
    {page.text.map((line, index) => <text key={index} x={line.x} y={line.y} fill={INK} fontFamily="BookSerif" fontSize={line.size * 25.4 / 72} fontStyle={line.italic ? "italic" : "normal"} textAnchor={line.center ? "middle" : "start"} xmlSpace="preserve">{line.text}</text>)}
    <text x="74" y="200" textAnchor="middle" fontFamily="BookSerif" fontSize="3.2" fill={INK}>{page.number}</text>
  </svg>;
}
