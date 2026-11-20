import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { interactiveExams } from "@/lib/probeklausuren";
import { EXAMS, wrap } from "../scripts/probeklausuren.mjs";

type Exam = { file: string; slug: string; fach: string; short: string };

describe("Interaktive Probeklausuren", () => {
  it("sind aktuell aus klausur/probeklausuren erzeugt (sonst: node scripts/probeklausuren.mjs)", () => {
    for (const exam of EXAMS as Exam[]) {
      const source = fs.readFileSync(path.resolve(__dirname, "..", "..", "klausur", "probeklausuren", exam.file), "utf8");
      const published = fs.readFileSync(path.resolve(__dirname, "..", "public", "probeklausur", `${exam.slug}.html`), "utf8");
      expect(published, exam.slug).toBe(wrap(source, exam));
      expect(published.startsWith("<!doctype html>")).toBe(true);
    }
  });

  it("verlinkt jede veröffentlichte Probeklausur von ihrem Fach", () => {
    for (const exam of EXAMS as Exam[]) {
      expect(interactiveExams(exam.fach).map((item) => item.href)).toContain(`/probeklausur/${exam.slug}`);
    }
  });
});
