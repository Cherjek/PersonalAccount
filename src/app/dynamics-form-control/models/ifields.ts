import { DynBaseControl } from './base-control';

export interface IFieldsDynReturn<T> {
  getFields(): DynBaseControl<T>[];
}