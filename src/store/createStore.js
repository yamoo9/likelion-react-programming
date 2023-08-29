import pipe from 'ramda/es/pipe';
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "@/middlewares/immer";

const withPersist = (config) => persist(config, { name: 'app-store' });

const createStore = pipe(
  devtools,
  immer,
  withPersist,
  create
);

export default createStore;